if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((registrado) =>
      console.log("Se instalo correctamente...", registrado)
    )
    .catch((error) => console.log("Fallo la instalación", error));
} else {
  console.error(
    "Service Workers no soportados (por lo menos en este navegador)"
  );
}
