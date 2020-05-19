<button class="btn btn-sm btn-danger" tooltip="Excluir" (click)="excluirEvento(evento, confirm)">
	<i class="fa fa-eraser"></i>
</button>

excluirEvento(evento: Evento, template: any) {
	this.openModal(template);
	this.evento = evento;
	this.bodyDeletarEvento = `Tem certeza que deseja excluir o Evento: ${evento.tema}, Código: ${evento.tema}`;
}

confirmeDelete(template: any) {
	this.eventoService.deleteEvento(this.evento.id).subscribe(
		() => {
	    	template.hide();
	    	this.getEventos();
	  	}, error => {
	    	console.log(error);
	  	}
	);
}

<div bsModal #confirm="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="dialog-sizes-name1">
	<div class="modal-dialog modal-sm">
  		<div class="modal-content">
    		<div class="modal-header">
      			<h4 class="modal-title pull-left">
        			Deletando Evento
      			</h4>
      			<button type="button" class="close pull-right" (click)="confirm.hide()" aria-label="Close">
        			<span aria-hidden="true">&times;</span>
      			</button>
    		</div>
    		<div class="modal-body">
      			<p>{{bodyDeletarEvento}}</p>
    		</div>    
    		<div class="modal-footer btn-group d-flex">      
      			<button type="button" class="btn btn-outline-primary" (click)="confirm.hide()">
        			CENCELAR
      			</button>
      			<button type="button" class="btn btn-outline-danger" (click)="confirmeDelete(confirm)">
          			DELETAR
        		</button>
    		</div>
  		</div>
	</div>
</div>