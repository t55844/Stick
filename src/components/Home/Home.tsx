import React from "react";
import { Image, Text, View, ScrollView } from 'react-native';
import TitleOfSection from "../TitleOfSection";


export default function Home() {

    return (
        <ScrollView
            className='flex-1 '>

            <TitleOfSection text="Welcome !" />
            <View className='bg-gray-100 p-4  m-auto bg-transparent w-full bg-secondary-400  flex flex-col justify-center items-center '>
                <Text className={` mt-2 text-lg`}>to our company, your go-to destination for our service. We are dedicated to providing the highest quality product to our customers, backed by our years of experience and exceptional customer service. Whether you're a returning customer or new to our brand, we are committed to exceeding your expectations and providing you with an unparalleled shopping experience.</Text>
            </View>

            <View className='h-32'>

                <Image
                    className='h-32 w-full'
                    source={{ uri: 'https://www.shutterstock.com/image-photo/happy-business-people-celebrating-success-260nw-1524155042.jpg' }}
                />
            </View>
            <View className='flex-1 p-8'>
                <TitleOfSection text="About Us" />
                <Text className='text-lg mb-4'>
                    We are a business that is committed to providing high-quality products and services to our customers.
                </Text>
                <Text className='text-lg mb-4'>
                    Our goal is to exceed our customers' expectations by delivering exceptional value and service.
                </Text>

                <Image
                    className='h-32 w-full'
                    source={{ uri: 'https://blog.gympass.com/wp-content/uploads/2018/07/11.jpg' }}
                />

                <Text className='text-lg mb-4'>
                    We achieve our goals through our commitment to innovation, efficiency, and continuous improvement.
                </Text>
                <Text className='text-lg'>
                    Our methods are based on the latest industry standards and best practices, and we use cutting-edge technology to provide our customers with the best possible experience.
                </Text>
            </View>
        </ScrollView>
    );
};