package com.cotidian.backend.exception;

public class BadRequestException extends Exception {

    public BadRequestException(String message) {
        super(message);
    }

}