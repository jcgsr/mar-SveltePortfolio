<script>
  let myDate = new Date();
  let year = myDate.getFullYear();
</script>

<footer>&copy; 2024 - {year} Jovane</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    color: gray;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
