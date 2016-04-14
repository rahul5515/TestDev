$( document ).ready( function( ) {
	
				$( '.tree li' ).each( function() {
						if( $( this ).children( 'ul' ).length > 0 ) {
								$( this ).addClass( 'parent' );     
						}
				});
				
				$( '.tree li.parent > a' ).click( function( ) {
						$( this ).parent().toggleClass( 'active' );
						$( this ).parent().children( 'ul' ).slideToggle( 'fast' );
				});
				
				$( '#all' ).click( function() {
					
					$( '.tree li' ).each( function() {
						$( this ).toggleClass( 'active' );
						$( this ).children( 'ul' ).slideToggle( 'fast' );
					});
				});
				
				$( '.tree li' ).each( function() {
						$( this ).toggleClass( 'active' );
						$( this ).children( 'ul' ).slideToggle( 'fast' );
				});
				$('#table').dataTable({
         "pageLength": 10,
          "lengthMenu": false,
          "searching" : false ,
		  "bLengthChange" : false, //thought this line could hide the LengthMenu
   
        }); 
		});