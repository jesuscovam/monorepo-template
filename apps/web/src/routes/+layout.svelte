<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="bg-gray-200">
	<Navbar />
	<slot />
	<Footer />
</div>
