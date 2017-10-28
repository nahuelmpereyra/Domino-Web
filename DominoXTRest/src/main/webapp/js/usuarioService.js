DominoApp.service("usuarioService", function () {
    
        this.usuarios = [
            
        ];
    
        this.getUsuario = function (name) {
            return this.usuarios.find(function (usuario) {
                return usuario.usuario == name;
            })
        }
    
        this.validarUsuario = function (name, password) {
            return this.usuarios.some(u => u.usuario == name && u.password == password)
        }
    
    });