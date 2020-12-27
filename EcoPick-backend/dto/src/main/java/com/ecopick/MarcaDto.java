package com.ecopick;

public class MarcaDto extends BaseDto {

    private String nombre;
    private String descripcion;

    public MarcaDto() {
    }

    public MarcaDto(long id)  {
        super(id);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}