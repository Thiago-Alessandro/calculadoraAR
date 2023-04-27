import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({

    selector:'botao',
    templateUrl: './botao.component.html'
})

export class botaoComponente{

    @Input()
    conteudo: string
    
    @Input()
    largura: string

    @Input()
    altura: string

    @Output()
    clickBotao = new EventEmitter()

    botaoClick(): void{
        let visor : HTMLInputElement= document.querySelector('#visor')
        let ultimoDigito = visor.value.substring(visor.value.length - 1, visor.value.length)
        let conteudo = this.conteudo

        console.log('subtituicao ' + this.substituirOperador(visor.value, conteudo))
        console.log('classe ' + ultimoDigito)

        console.log("deletar " + this.deletar(visor.value))

        if(conteudo!='=' && conteudo!='del' && conteudo != "C"){

            if(ultimoDigito!='+' && ultimoDigito!='-' && ultimoDigito!='*' && ultimoDigito!='/'){//se nao for operador coloca no visor

                visor.value+=conteudo

            }else if( conteudo!='*' && conteudo!='/' && conteudo!='=' ){

                visor.value+=conteudo

            }
            else{
                visor.value = this.substituirOperador(visor.value, conteudo)
            }

        }else if(conteudo=='='){
            visor.value = eval(visor.value)
        }else if(conteudo=='del'){
            visor.value = this.deletar(visor.value)
        }else if(conteudo == 'C'){
            visor.value = ""
        }
        
        console.log('ultimo dig ' + ultimoDigito)
        console.log('conteudo ' + this.conteudo)
        this.clickBotao.emit()
    }

    substituirOperador(conteudo:string, novoDigito){//q ta no visor

        let conteudoSplit = conteudo.split("")

        conteudoSplit[conteudo.length - 1] = novoDigito

        conteudo = conteudoSplit.join('')

        return conteudo

    }

    deletar(conteudo : string){

        let conteudoSplit = conteudo.split("")

        conteudoSplit[conteudo.length - 1] = ''

        conteudo = conteudoSplit.join('')

        return conteudo

    }

}