import BuilderCriadorSanduiche from "./Interface";
import Sanduiche from "./Sanduiche";

export default class CriarSanduiche implements BuilderCriadorSanduiche {
    private sanduiche: Sanduiche;

    constructor() {
        this.sanduiche = new Sanduiche();
    }
    AdicionarPao(): void {
        this.sanduiche.setPao('Australiano')
    }
    AdicionarCarne(): void {
        this.sanduiche.setCarne('Bovina')
    }
    AdicionarCondimentos(): void {
        this.sanduiche.setCondimentos('Queijo')
    }
    AdicionarSalada(): void {
        this.sanduiche.setSalada('Tomate')
    }
    public getSanduiche(): Sanduiche {
        const result = this.sanduiche;
        return result;
    }
}