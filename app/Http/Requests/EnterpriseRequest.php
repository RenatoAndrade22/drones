<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EnterpriseRequest extends FormRequest
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
            'name' => 'required|unique:enterprises,name',
            'cnpj' => 'required|unique:enterprises,cnpj'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'A razão social é obrigatório.',
            'cnpj.required' => 'O cnpj é obrigatório.',
            'cnpj.unique' => 'O cnpj já foi cadastrado.',
            'name.unique' => 'A razão social já foi cadastrada.',
        ];
    }
}
