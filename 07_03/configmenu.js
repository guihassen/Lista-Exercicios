class ConfigMenu extends Phaser.Scene {
    constructor(){
        super ({key: 'ConfigMenu'});
        this.start;
        this.config;
        this.exit;
    }

    preload(){

    }

    create(){
        this.start = this.add.text(800, 450, 'Iniciar', {
            ontSize: '44px',
            color: '#000000',
            fontFamily: 'ARCADECLASSIC',
           
        }).setScale(2.0).setOrigin(0.5,0.5);
   
        this.config = this.add.text(800, 550, 'Configurações', {
            ontSize: '44px',
            color: '#000000',
            fontFamily: 'ARCADECLASSIC',
           
        }).setScale(2.0).setOrigin(0.5,0.5);
    
        this.exit = this.add.text(800, 650, 'Sair', {
            ontSize: '44px',
            color: '#000000',
            fontFamily: 'ARCADECLASSIC',
           
        }).setScale(2.0).setOrigin(0.5,0.5);
   
        this.start.setInteractive()
            .on('pointerup', () => {
               console.log('Apertado') ; //Muda a textura do botão ao clicar
               this.scene.launch('Tela');
               this.scene.stop('ConfigMenu')
            })
            
        this.config.setInteractive()
            .on('pointerup', () => {
               console.log('Apertado') ; //Muda a textura do botão ao clicar
            })
        
         this.exit.setInteractive()
            .on('pointerup', () => {
               console.log('Apertado') ; //Muda a textura do botão ao clicar
            })
   
   
   
    }

        

    update(){

    }























}