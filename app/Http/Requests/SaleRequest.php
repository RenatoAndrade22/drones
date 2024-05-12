<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaleRequest extends FormRequest
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
            'enterprise_id' => 'required',
            'lot_item_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'enterprise_id.required' => 'O código da empresa é obrigatório.',
            'lot_item_id.required' => 'O código do lote é obrigatório.'         
        ];
    }
}
