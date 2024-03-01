"use client"
import useMovies from '@/hooks/useMovies';
import React, { ButtonHTMLAttributes } from 'react';

interface CardButtonProps{
    movie: EntityMovies
}

const CardButton = ({movie}: CardButtonProps) => {
  const { addItemInCart } = useMovies();
  return <div> <p>butoon</p></div>;
}

export default CardButton;