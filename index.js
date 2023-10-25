const portNumber = process.env.npm_package_config_port;
const packageAuthor = process.env.npm_package_config_packageAuthor;
const currentOs = process.platform;
const currentCpuArchitecture = process.arch;

console.log(`Port number: ${portNumber}`);
console.log(`Package Author: ${packageAuthor}`);
console.log(`Current OS: ${currentOs}`);
console.log(`Current CPU Archcitecture: ${currentCpuArchitecture}`);
