import { persisted } from 'svelte-local-storage-store';
import { get } from 'svelte/store';

const paperIndex = persisted('index', [] as string[]);

export function createFreshPaper() {
	const timeString = Date.now().toString();

	paperIndex.update((index) => {
		index.push(timeString);
		return index;
	});

	return persisted(timeString, {
		title: '',
		text: ''
	});
}

export function listStoredPapers() {
	const list: string[] = get(paperIndex);

	return list;
}

export function getPaperByTimeString(timeString: string) {
	return persisted(timeString, {
		title: '',
		text: ''
	});
}
