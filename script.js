<script>
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNo1xSbaMCr25xJl63Svapfx4wuKpaYR2XE6-9jGVtorTscmeKpEiSwHT4Gf7dql40/exec";

    async function fetchReviews() {
        try {
            const response = await fetch(SCRIPT_URL);
            return await response.json();
        } catch (error) { 
            console.error("Error fetching reviews:", error);
            return []; 
        }
    }

    fetchReviews().then(data => {
        const feed = document.getElementById('all-reviews-feed');
        if (data && data.length > 0) {
            feed.innerHTML = ""; 
            data.forEach(review => {
                feed.innerHTML += `
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div class="text-amber-400 mb-4 text-xs">${review.rating}</div>
                        <p class="text-slate-600 italic mb-4">"${review.experience}"</p>
                        <p class="font-bold text-blue-900">— ${review.name}</p>
                    </div>`;
            });
        }
    });
</script>