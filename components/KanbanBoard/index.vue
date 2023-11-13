<template>
  <!-- <simplebar> -->
  <draggable
    v-model="columns"
    group="columns"
    :animation="200"
    handle=".drag-handle"
    item-key="id"
    class="flex gap-4 overflow-x-auto items-start"
  >
    <template #item="{ element: column }: { element: Column }">
      <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
        <header class="font-bold mb-4">
          <KanbanBoardDragHandle />
          {{ column.name }}
        </header>
        <draggable
          v-model="column.tasks"
          :group="{
            name: 'task',
            pull: alt ? 'clone' : true,
          }"
          :animation="200"
          handle=".drag-handle"
          item-key="id"
        >
          <template #item="{ element: task }: { element: Task }">
            <KanbanBoardTask
              :task="task"
              @delete="
                column.tasks = column.tasks.filter((t) => t.id != $event)
              "
            />
          </template>
        </draggable>
        <footer>
          <KanbanBoardNewTask @add="(task) => column.tasks.push(task)" />
        </footer>
      </div>
    </template>
  </draggable>
  <!-- </simplebar> -->
</template>

<script setup lang="ts">
import type { Column, Task } from "@/types";
import { nanoid } from "nanoid";
import { TaskStatus } from "~/constants";
import draggable from "vuedraggable";
import simplebar from "simplebar-vue";

const columns = ref<Column[]>([
  {
    id: nanoid(),
    name: "Blacklog",
    tasks: [
      {
        id: nanoid(),
        title: "Task 1",
        status: TaskStatus.OPEN,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Task 2",
        status: TaskStatus.OPEN,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Task 3",
        status: TaskStatus.OPEN,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        createdAt: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    name: "In progress",
    tasks: [],
  },
  {
    id: nanoid(),
    name: "QA",
    tasks: [],
  },
  {
    id: nanoid(),
    name: "Complete",
    tasks: [],
  },
]);

const alt = useKeyModifier("Alt");
</script>
