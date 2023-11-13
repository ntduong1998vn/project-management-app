<template>
  <button
    class="w-full text-left"
    v-if="focused == false"
    @click="
      focused = true;
      nextTick(() => editor?.focus());
    "
  >
    + Add a task
  </button>

  <textarea
    v-else
    v-model="title"
    @keydown.tab="createTask"
    @keydown.enter="createTask"
    class="focus:bg-white focus:shadow resize-none rounded w-full border-none bg-transparent p-2 cursor-pointer"
    :class="{ 'h-7': !focused, 'h-20': focused }"
    style="outline: none !important"
    placeholder="Enter a new task name"
    @blur="
      focused = false;
      createTask($event);
    "
    ref="editor"
  />
</template>

<script setup lang="ts">
import type { Task } from "@/types";
import { nanoid } from "nanoid";
import { TaskStatus } from "@/constants";

const emit = defineEmits<{
  (e: "add", payload: Task): void;
}>();

const focused = ref(false);
const title = ref("");
const editor = ref<HTMLElement | null>(null);

function createTask(e: Event) {
  if (title.value.trim()) {
    e.preventDefault();
    emit("add", {
      id: nanoid(),
      title: title.value.trim(),
      status: TaskStatus.OPEN,
      description: "",
      createdAt: new Date(),
    });
  }
  title.value = "";
  focused.value = false;
}
</script>
