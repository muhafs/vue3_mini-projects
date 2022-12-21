import { createRouter, createWebHistory } from 'vue-router';
import NoteAppView from '@/views/NoteAppView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/note-app',
			name: 'note-app',
			component: NoteAppView,
		},
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () => import('../views/AboutView.vue'),
		// },
	],
});

export default router;
