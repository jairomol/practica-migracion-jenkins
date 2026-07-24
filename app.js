const password = process.env.DB_PASS;
const ambiente = process.env.ENTORNO;

console.log(`Conectando al entorno: ${ambiente}`);

if (password === "SuperClaveSecreta123!") {
  console.log("🔑 ¡Conexión a la Base de Datos Exitosa!");
  process.exit(0);
} else {
  console.error("❌ Error: Contraseña incorrecta o no proporcionada.");
  process.exit(1);
}
