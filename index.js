const { Plugin } = require('powercord/entities')

module.exports = class HeyFurret extends Plugin {
  constructor () {
    super()
    this.URLs = [
      'https://cdn.discordapp.com/emojis/600562990391230464.png',
      'https://axolotl.club/drUhrFjh.png?key=HailTheAxolotl6YHBhJO',
      'https://cdn.discordapp.com/attachments/578420973678755840/607333064170799134/f6f.gif',
      'https://media.discordapp.net/attachments/580269886450696193/602658151371767838/frrrt.gif',
      'https://media.discordapp.net/attachments/603023211608801301/603023336020246548/image0.jpg',
      'https://cdn.discordapp.com/attachments/578356231132020758/600530368411729951/furret_dance_moves.gif',
      'https://media.discordapp.net/attachments/296056831514509312/601475907433267214/furret_run.gif',
      'https://cdn.discordapp.com/attachments/607335792477601887/607336138667065354/image0.jpg',
      'https://cdn.discordapp.com/attachments/607335792477601887/607336138667065355/image2.jpg',
      'https://cdn.discordapp.com/attachments/607335792477601887/607336778071801876/image0.jpg',
      'https://cdn.discordapp.com/banners/578356230637223936/3ac5ea7af74ba9ac4da74b673ce3ef24.jpg',
      'https://pbs.twimg.com/media/EBC45ssUIAMNwwX.png',
      'https://cdn.discordapp.com/emojis/593658794668720154.png',
      'https://cdn.discordapp.com/emojis/580528388507435009.png',
      'https://cdn.discordapp.com/attachments/607335792477601887/607338895616770099/image0.jpg',
      'https://cdn.discordapp.com/attachments/607335792477601887/607338960146137124/image1.jpg',
      'https://cdn.discordapp.com/attachments/607335792477601887/607338960691265549/image0.gif'
    ]
  }

  startPlugin () {
    this.registerCommand(
      'heyfurret',
      [],
      'Replaces every image with a random image of Furret.',
      '{c}',
      this.heyfurret.bind(this)
    )
  }

  getRandomURL () {
    return this.URLs[Math.floor(Math.random() * this.URLs.length)]
  }

  heyfurret () {
    document
      .querySelectorAll('[style*="background-image"]')
      .forEach(
        ({ style }) => (style.backgroundImage = `url("${this.getRandomURL()}")`)
      )

    document
      .querySelectorAll('img')
      .forEach(image => (image.src = this.getRandomURL()))
  }
}
