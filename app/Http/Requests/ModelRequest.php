<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ModelRequest extends FormRequest
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
            'name' => 'required',
            'serial_number' => 'required',
            'year' => 'required',
            'brand_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O nome é obrigatório.',
            'serial_number.required' => 'O número de série é obrigatório.',
            'year.required' => 'O ano é obrigatório.',
            'brand_id.required' => 'A marca é obrigatória.',
        ];
    }
}
