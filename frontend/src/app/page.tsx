'use client'
import styles from './page.module.css'
import { FieldValues, useForm } from "react-hook-form";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchKeanuPicture } from 'MainRoot/app/slice';
import { KeanuPictureState } from 'MainRoot/app/types';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { register, handleSubmit } = useForm({ defaultValues: { width: 400, height: 600, young: false, grayScale: false } });
    const dispatch = useDispatch();
    const KeanuPictureState = useSelector((state: KeanuPictureState) => {
        return state;
    });

    const onSubmit = (data: FieldValues) => {
        dispatch({ payload: data, type: fetchKeanuPicture.type });
    };

    return (
        <main className={styles.main}>
            <div className={styles.description}>

                <div className={inter.className}>
                    {
                        KeanuPictureState.loadingKeanuPictureRequest ?
                            <div className={styles.loadingMsg}>Loading...</div> :
                            <div className={styles.picture} dangerouslySetInnerHTML={{ __html: KeanuPictureState.keanuPicture?.svgPicture ?? '' }}></div>
                    }

                    {
                        KeanuPictureState.errorLoadingKeanuPicture &&
                        <div className={styles.error}>
                            {KeanuPictureState.errorLoadingKeanuPicture}
                        </div>
                    }
                </div>

                <div className={inter.className}>
                    Get a Keanu Picture by setting the following values:
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={inter.className}>
                    <label>
                        Width:
                        <input type="number" {...register("width", { valueAsNumber: true })} />
                    </label>
                    <label>
                        Height:
                        <input type="number" {...register("height", { valueAsNumber: true })} />
                    </label>
                    <label>
                        Young:
                        <input type="checkbox" {...register("young")} />
                    </label>
                    <label>
                        Gray Scale:
                        <input type="checkbox" {...register("grayScale")} />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </main >
    )
}
