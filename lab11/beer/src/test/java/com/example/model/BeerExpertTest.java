package com.example.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class BeerExpertTest {
    BeerExpert beerExpert;

    @BeforeEach
    void setUp() {
        beerExpert = new BeerExpert();
    }
    @Test
    void getBrandsAmber() {
        List expectedBrands = new ArrayList();
        expectedBrands.add("Jack Amber");
        expectedBrands.add("Red Moose");

        assertEquals(expectedBrands, beerExpert.getBrands("amber"));
    }

    @Test
    void getBrandsNotAmber() {
        List expectedBrands = new ArrayList();
        expectedBrands.add("Jail Pale Ale");
        expectedBrands.add("Gout Stout");

        assertEquals(expectedBrands, beerExpert.getBrands("light"));
        assertEquals(expectedBrands, beerExpert.getBrands("brown"));
        assertEquals(expectedBrands, beerExpert.getBrands("dark"));
    }
}