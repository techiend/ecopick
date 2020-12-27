package com.ecopick;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "ocupacion", schema = "ecopick", catalog = "")
public class OcupacionEntity extends BaseEntity{
    private String nombre;

    @Basic
    @Column(name = "nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

}