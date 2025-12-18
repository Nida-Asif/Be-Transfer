document.addEventListener('click', function (e) {
  const btn = e.target.closest('button[data-confirm-delete]');
  if (!btn) return;
  e.preventDefault();
  const form = btn.closest('form');
  if (!form) return;
  if (confirm('Are you sure you want to delete this product?')) form.submit();
});
