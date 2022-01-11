export class Coracao {


    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: String = '/assets/coracao_cheio.png',
        public urlCoracaovazio: String = '/assets/coracao_vazio.png'
    ) { }


    public exibeCoracao(): String {

        if (this.cheio) {
            return this.urlCoracaoCheio
            }else{
                this.urlCoracaovazio

        }
    }
}