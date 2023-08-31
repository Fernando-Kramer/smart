package br.com.smartbackend.infrastructure.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(HttpRequestGenericsExeptionByApi.class)
    public ResponseEntity<String> handleClienteJaCadastradoException(HttpRequestGenericsExeptionByApi ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}