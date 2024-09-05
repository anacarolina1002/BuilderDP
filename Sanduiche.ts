export default class Sanduiche {
    private pao: string = '';
    private carne: string = '';
    private condimentos: string = '';
    private salada: string = '';

    public setPao(pao:string): void {
        this.pao = pao
    }
    public getPao(): string {
        return this.pao
    }
    public setCarne(carne:string): void {
        this.carne = carne
    }
    public getCarne(): string {
       return this.carne
    }
    public setCondimentos(condimentos:string): void {
        this.condimentos = condimentos
    }
    public getCondimentos(): string {
        return this.condimentos
    }
    public setSalada(salada:string): void {
        this.salada = salada
    }
    public getSalada(): string {
        return this.salada
    }
    public descricao(): void {
        console.log(`Pão: ${this.getPao()}
                     \nCarne: ${this.getCarne()}
                     \nSalada: ${this.getSalada()}
                     \nCondimentos: ${this.getCondimentos()}`);
    }
}
