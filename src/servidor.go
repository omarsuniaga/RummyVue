package main
// Paquetes de tercerso
import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"gopkg.in/olahol/melody.v1"
)

func main() {
	e:=echo.New()
	m:=melody.New()
	
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Static(prefix:"/", root:"./public")
	// recibe la peticion del cliiente
	e.GET(path:"/ws", func(c echo.Context)error {
		m.HandleRequest(c.Response(), c.Request())
		return nil
	})
	// enviar mensajes a todos
	m.HandleRequest(func(s*melody.Session, mgs[]byte){
		m.Broadcast(msg)
	})
	e.Logger.Fatal(e.Start(address":1323"))
}