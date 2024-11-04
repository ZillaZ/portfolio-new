// place files you want to import through the `$lib` alias in this folder.
import { type Writable, writable } from "svelte/store";
export let selected : Writable<number> = writable(0)