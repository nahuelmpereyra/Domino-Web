package ar.edu.unq.domino.rest.runnable

import ar.edu.unq.domino.rest.server.RestfulServer
import org.uqbar.xtrest.api.XTRest

class App {
	
	def static void main(String[] args) {
		

        XTRest.startInstance(9000, new RestfulServer())
    }
	
}