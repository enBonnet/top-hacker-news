<script>
  export let url;
  export let title;
  export let score;
  export let by;
</script>

<div class="item">
  <div class="item-title">
    <a href={url} alt={title}>
      {title}
    </a>
  </div>
  <div class="item-data">
    <a href={url} alt={title}>
      {score} points by <span class="by">{by}</span>
    </a>
  </div>
</div>

<style>
  .item {
    margin-bottom: 24px;
  }
  .item .item-title {
    font-weight: 600;
    font-size: 1.1em;
    margin-bottom: 8px;
  }
  .item .item-data {
    font-weight: 400;
    font-size: 0.9em;
    color: var(--color-white-soft);
  }
  .item .by {
    font-style: italic;
  }
</style>
