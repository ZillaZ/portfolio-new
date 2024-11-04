// place files you want to import through the `$lib` alias in this folder.
import { type Writable, writable } from "svelte/store";
export let selected : Writable<number> = writable(0)
export let body_div : Writable<HTMLDivElement> = writable()