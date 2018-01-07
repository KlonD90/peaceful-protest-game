import { I18N_UI_LOADING } from '../constants';

class Loading {
    init(config) {
        this.mz = {
            config,
            objects: {
                textProgress: null
            }
        };
    }

    preload() {
        // this.game.stage.backgroundColor = '#000';
        var bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'enter_bg');
        bgTile.fixedToCamera = true;

        this.mz.config.assets.forEach(([assetType, ...assetParams]) => {
            switch (assetType) {
                case 'pack':
                    this.load.pack(...assetParams);
                    break;
                case 'spritesheet':
                    this.load.spritesheet(...assetParams);
                    break;
                case 'image':
                    this.load.image(...assetParams);
                    break;
            }
        });

        // this.mz.objects.textLoading = this.game.add.text(
        //     this.game.world.centerX - 5,
        //     this.game.world.centerY,
        //     this.game.mz.i18n.getTranslation(I18N_UI_LOADING),
        //     {
        //         font: '26px Arial',
        //         fill: '#000'
        //     }
        // );
        // this.mz.objects.textLoading.anchor.set(1, 0.5);

        this.mz.objects.enterLogo = this.game.add.sprite(
            this.game.world.centerX,
            this.game.world.centerY + 100,
            'enter_logo'
        );

        if (this.game.width  < 500 )
        {
            this.mz.objects.enterLogo.scale.setTo(0.5);
        }
        else
        {
            if (this.game.width > 1000)
            {
                this.mz.objects.enterLogo.scale.setTo(0.7);
            }
            else
            {
                this.mz.objects.enterLogo.scale.setTo(0.7);
            }
        }


        this.mz.objects.enterLogo.anchor.setTo(0.5, 1);

        this.mz.objects.textProgress = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY+110,
            '0 %',
            {
                font: '26px Arial',
                fill: '#000'
            }
        );
        this.mz.objects.textProgress.resolution = window.devicePixelRatio || 1;
        this.mz.objects.textProgress.anchor.set(0.5, 0);
    }

    loadUpdate() {
        this.mz.objects.textProgress.setText(`${this.game.load.progress} %`);
    }

    create() {
        this.state.start(...this.mz.config.nextState);
    }
}

export default Loading;
