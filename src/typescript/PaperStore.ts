import { persisted } from 'svelte-local-storage-store';
import { get } from 'svelte/store';
import { introPaper } from './Paper';

const paperIndex = persisted('index', [] as string[]);

export function loadPaperOnMount() {
	const existingPapers = listStoredPapers();
	if (existingPapers.length === 0) {
		return createIntroPaper();
	} else {
		return getPaperByTimeString(existingPapers[existingPapers.length - 1]);
	}
}

export function createIntroPaper() {
	return createFreshPaper(introPaper.title, introPaper.text);
}

export function createFreshPaper(title = '', text = '') {
	const timeString = Date.now().toString();

	paperIndex.update((index) => {
		index.push(timeString);
		return index;
	});

	return persisted(timeString, {
		title,
		text
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
