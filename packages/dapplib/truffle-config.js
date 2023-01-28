require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan repeat place attitude gloom praise army gesture'; 
let testAccounts = [
"0x2f779fdeda3892debfce8a09d9bc729fccea3755627723ac20c74740c1c66913",
"0xc4539cbb2c957b2615face69355596a4bb5e5245767e56e39b1a35abc55d32b3",
"0xcd18df90fe0688b411b0649ff96d3ec84833c7e879f9cee99a902121d2c1a34f",
"0x8fc5b37720c6b9b858dbed3f6dd89b39ec782975050464399ad0497582349676",
"0x692d1b157b5490e3d327b3ac7eb8e2ca551c609789a86580bcaec194369ff65a",
"0x4d40b3900cfa86ef1d8c3f858341cc95d0b8a553034ccd163bf9848c33e27e2d",
"0x307d1da5a6f384ae8606b728f95592029b9d857a1d797f1d96d28b433b3cd8f4",
"0x462c01fc80391b93a72c2445370aa3d7061e0703ca7e7acab79be54e7aa27d63",
"0x3fe86f7467bdfb93d9fb3e52180192afc4e6228bcf0f8b1ba97e52d22d8433c7",
"0xde7aee68455146aa0b91793d84fac2fa5bc06481145fe45ebb8e5098e9fbd8f4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

