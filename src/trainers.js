export default function getTrainers(filterText) {
  async () => {
    await fetch(url)
      .then(r => r.json())
      .then(data => {
        //console.log(data);
        trainers = data;
      });
  };
}
