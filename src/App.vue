<template>
	<!-- <RouterView /> -->

	<button @click="openModal()" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-teal-500 px-3 py-2 text-xl text-white shadow-md transition hover:bg-teal-700">Open Modal</button>

	<div v-show="isModalOpen" @click.self="closeModal()" class="fixed inset-0 flex h-screen w-screen items-center justify-center bg-black/50">
		<div class="flex max-h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-md bg-white shadow-md">
			<header class="bg-slate-600 p-3 text-3xl text-white">Title</header>

			<main class="overflow-y-scroll px-4 py-3 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-900 scrollbar-thumb-rounded-full">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus qui veritatis tempora optio sit voluptatem ullam quos libero illo quibusdam iusto dicta explicabo, nulla exercitationem aliquid, ex a blanditiis tenetur omnis
				adipisci id! Quis odit vitae consequuntur ut mollitia, illo inventore, iure magni voluptates doloremque cupiditate aliquid unde quia, amet provident? Illo quidem minus, cupiditate iusto qui vitae sit in quibusdam dolorum. Sint
				repellat itaque voluptatem, minus magnam eius quis explicabo animi illum tenetur neque consequuntur nemo beatae minima voluptates vitae accusantium facere soluta ab quas sit! Sit voluptates ratione, pariatur unde cumque error quam
				tempore dolores incidunt aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus qui veritatis tempora optio sit voluptatem ullam quos libero illo quibusdam iusto dicta explicabo, nulla exercitationem
				aliquid, ex a blanditiis tenetur omnis adipisci id! Quis odit vitae consequuntur ut mollitia, illo inventore, iure magni voluptates doloremque cupiditate aliquid unde quia, amet provident? Illo quidem minus, cupiditate iusto qui vitae
				sit in quibusdam dolorum. Sint repellat itaque voluptatem, minus magnam eius quis explicabo animi illum tenetur neque consequuntur nemo beatae minima voluptates vitae accusantium facere soluta ab quas sit! Sit voluptates ratione,
				pariatur unde cumque error quam tempore dolores incidunt aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus qui veritatis tempora optio sit voluptatem ullam quos libero illo quibusdam iusto dicta
				explicabo, nulla exercitationem aliquid, ex a blanditiis tenetur omnis adipisci id! Quis odit vitae consequuntur ut mollitia, illo inventore, iure magni voluptates doloremque cupiditate aliquid unde quia, amet provident? Illo quidem
				minus, cupiditate iusto qui vitae sit in quibusdam dolorum. Sint repellat itaque voluptatem, minus magnam eius quis explicabo animi illum tenetur neque consequuntur nemo beatae minima voluptates vitae accusantium facere soluta ab quas
				sit! Sit voluptates ratione, pariatur unde cumque error quam tempore dolores incidunt aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus qui veritatis tempora optio sit voluptatem ullam quos libero
				illo quibusdam iusto dicta explicabo, nulla exercitationem aliquid, ex a blanditiis tenetur omnis adipisci id! Quis odit vitae consequuntur ut mollitia, illo inventore, iure magni voluptates doloremque cupiditate aliquid unde quia,
				amet provident? Illo quidem minus, cupiditate iusto qui vitae sit in quibusdam dolorum. Sint repellat itaque voluptatem, minus magnam eius quis explicabo animi illum tenetur neque consequuntur nemo beatae minima voluptates vitae
				accusantium facere soluta ab quas sit! Sit voluptates ratione, pariatur unde cumque error quam tempore dolores incidunt aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus qui veritatis tempora
				optio sit voluptatem ullam quos libero illo quibusdam iusto dicta explicabo, nulla exercitationem aliquid, ex a blanditiis tenetur omnis adipisci id! Quis odit vitae consequuntur ut mollitia, illo inventore, iure magni voluptates
				doloremque cupiditate aliquid unde quia, amet provident? Illo quidem minus, cupiditate iusto qui vitae sit in quibusdam dolorum. Sint repellat itaque voluptatem, minus magnam eius quis explicabo animi illum tenetur neque consequuntur
				nemo beatae minima voluptates vitae accusantium facere soluta ab quas sit! Sit voluptates ratione, pariatur unde cumque error quam tempore dolores incidunt aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
				repellendus qui veritatis tempora optio sit voluptatem ullam quos libero illo quibusdam iusto dicta explicabo, nulla exercitationem aliquid, ex a blanditiis tenetur omnis adipisci id! Quis odit vitae consequuntur ut mollitia, illo
				inventore, iure magni voluptates doloremque cupiditate aliquid unde quia, amet provident? Illo quidem minus, cupiditate iusto qui vitae sit in quibusdam dolorum. Sint repellat itaque voluptatem, minus magnam eius quis explicabo animi
				illum tenetur neque consequuntur nemo beatae minima voluptates vitae accusantium facere soluta ab quas sit! Sit voluptates ratione, pariatur unde cumque error quam tempore dolores incidunt aspernatur?
			</main>

			<footer class="flex items-center justify-between bg-slate-600 p-3">
				<button @click="closeModal()" type="button" class="rounded-md bg-red-600 px-3 py-2 text-white">Cancel</button>
				<button @click="closeModal()" type="button" class="rounded-md bg-blue-600 px-3 py-2 text-white">Submit</button>
			</footer>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const isModalOpen = ref(false);

	const openModal = () => {
		isModalOpen.value = true;
	};

	const closeModal = () => {
		isModalOpen.value = false;
	};
</script>
