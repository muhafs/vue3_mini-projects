<template>
	<main class="container">
		<header class="py-4 flex justify-between items-center">
			<h2 class="text-6xl font-bold">Notes</h2>

			<button type="button" class="text-4xl text-white bg-slate-900 rounded-full w-16 h-16" @click="isModalOpen = true">+</button>
		</header>

		<section class="py-4 gap-4 gap-y-8 grid grid-cols-6 justify-items-center">
			<div class="w-56 h-56 p-4 rounded-2xl shadow-lg flex flex-col justify-between" :style="{ backgroundColor: note.bgColor }" v-for="note in notes" :key="note.id">
				<p class="text-sm">{{ note.content }}</p>

				<p class="text-sm font-bold">{{ note.date }}</p>
			</div>
		</section>
	</main>

	<div v-show="isModalOpen" class="absolute inset-0 bg-black/40 z-10 grid place-items-center">
		<div class="bg-white rounded-lg p-4 flex flex-col gap-4 w-6/12 relative">
			<textarea v-model.trim="newNote" class="focus:outline-none border-2 border-blue-500 rounded-lg h-56 w-full p-4" name="note"></textarea>

			<p class="text-xs text-red-600" v-if="noteError">{{ noteError }}</p>

			<div class="flex justify-between items-center">
				<button @click="closeModal()" type="button" class="bg-slate-900 text-white rounded-lg py-3 px-4 font-bold text-xl">Close</button>

				<button type="button" @click="addNote()" :class="['rounded-lg py-3 px-4 font-bold text-xl', newNote == '' ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-slate-900 text-white']">Add Note</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const isModalOpen = ref(false);

	const newNote = ref('');
	const noteError = ref('');

	const getRandomColor = () => {
		return `hsl(${Math.random() * 360}, 100%, 75%)`;
	};

	const addNote = () => {
		if (!newNote.value || !newNote.value.trim) {
			noteError.value = '* Note Cannot be Empty';
			return;
		}

		const date = new Date();

		notes.value.push({
			id: Math.random().toString(36),
			content: newNote.value,
			date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
			bgColor: getRandomColor(),
		});

		newNote.value = '';
		noteError.value = '';
		isModalOpen.value = false;
	};

	const closeModal = () => {
		noteError.value = '';
		isModalOpen.value = false;
	};

	const notes = ref([
		{
			id: 1,
			content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint alias modi repudiandae necessitatibus velit accusamus. Fuga earum ratione iure perspiciatis!',
			date: '2022/12/20',
			bgColor: 'hsl(254.24292366578797, 100%, 75%)',
		},
		{
			id: 2,
			content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint alias modi repudiandae necessitatibus velit accusamus. Fuga earum ratione iure perspiciatis!',
			date: '2022/12/20',
			bgColor: 'hsl(10.97468569202615, 100%, 75%)',
		},
	]);
</script>
