<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LotRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:lots,name',
            'product_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'lot_name.required' => 'O nome do lote é obrigatório.',
            'product_id.required' => 'O produto é obrigatório.'         
        ];
    }
}
