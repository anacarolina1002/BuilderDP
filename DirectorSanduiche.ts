import BuilderCriadorSanduiche from "./Interface";

export default class DirectorSanduiche {
    private builder: BuilderCriadorSanduiche;

    constructor(builder: BuilderCriadorSanduiche){
        this.builder = builder;
    }

    public setBuilder(builder: BuilderCriadorSanduiche): void {
        this.builder = builder;
    }

    public construirSanduicheSimples(): void {
        this.builder.AdicionarPao();
        this.builder.AdicionarCarne();
    }

    public construirSanduicheCompleto(): void {
        this.builder.AdicionarPao();
        this.builder.AdicionarCarne();
        this.builder.AdicionarCondimentos();
        this.builder.AdicionarSalada();
    }
}