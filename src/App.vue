<template>
	<!-- <RouterView /> -->

	<button @click="showModal = true" class="bg-teal-500 text-white text-xl px-3 py-2 shadow-md rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-teal-700 transition">Open Modal</button>

	<div v-show="showModal" @click.self="closeModal()" class="absolute inset-0 w-screen h-screen bg-black/50 flex justify-center items-center">
		<div class="bg-white flex flex-col w-full max-w-4xl max-h-[80vh] rounded-md shadow-md overflow-hidden">
			<header class="bg-slate-600 text-white text-3xl p-3">Title</header>

			<main class="overflow-y-scroll">
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

			<footer class="p-3 flex justify-between items-center bg-slate-600">
				<button @click="closeModal()" type="button" class="bg-red-600 text-white px-3 py-2 rounded-md">Cancel</button>
				<button @click="closeModal()" type="button" class="bg-blue-600 text-white px-3 py-2 rounded-md">Submit</button>
			</footer>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const showModal = ref(false);

	const closeModal = () => {
		showModal.value = false;
	};
</script>
