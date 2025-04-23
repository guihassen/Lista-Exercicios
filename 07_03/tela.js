class Tela extends Phaser.Scene {
    constructor(){
        super ({key:'Tela'});
        this.texto;
}

    preload(){

        
    }

    create(){

        this.texto = this.add.text(800, 450, 'Gostei muito de poder ser Mentor. Na minha opinião a melhor forma de aprender é ensinando!', {
            ontSize: '44px',
            color: '#000000',
            fontFamily: 'ARCADECLASSIC',

    }).setScale(2.0).setOrigin(0.5,0.5);

        this.exit = this.add.text(800, 650, 'Sair', {
            ontSize: '44px',
            color: '#000000',
            fontFamily: 'ARCADECLASSIC',

    }).setScale(2.0);

    this.exit.setInteractive()
            .on('pointerup', () => {
               console.log('Apertado') ; //Muda a textura do botão ao clicar
               this.scene.launch('ConfigMenu');
               this.scene.stop('Tela')
            })
}
    update(){

    }

    















}