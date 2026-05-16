package core

type WaybackMachineError struct {
	IsWaybackMachineError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWaybackMachineError(code string, msg string, ctx *Context) *WaybackMachineError {
	return &WaybackMachineError{
		IsWaybackMachineError: true,
		Sdk:              "WaybackMachine",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WaybackMachineError) Error() string {
	return e.Msg
}
