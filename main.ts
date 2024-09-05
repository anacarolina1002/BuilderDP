import CriarSanduiche from "./CriarSanduicheCarne";
import DirectorSanduiche from "./DirectorSanduiche";

const builder = new CriarSanduiche();
const director = new DirectorSanduiche(builder);

director.construirSanduicheSimples();
builder.getSanduiche().descricao();

director.construirSanduicheCompleto();
builder.getSanduiche().descricao();






