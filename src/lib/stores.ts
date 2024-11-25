import { writable } from "svelte/store";

export enum Section {
    About,
    Projects,
    Experience
}

export let active_section = writable(Section.About)