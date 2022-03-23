//퀴즈 쿼리즈
import {gql} from '@apollo/client'

export const CREATE_PRODUCT = gql`
    mutation creatProduct(
        $seller:String, $createProductInput:CreateProductInput!){
        createProduct(seller:$seller, createProductInput:$createProductInput){
            _id
            number                      
            message
            }
        }
    `

export const UPDATE_PRODUCT = gql`
    mutation updateProduct(
        $productId:ID, $updateProductInput:UpdateProductInput!){
        updateProduct(productId:$productId, UpdateProductInput:$updateProductInput){
            _id
            number                      
            message
        }
    }
`

