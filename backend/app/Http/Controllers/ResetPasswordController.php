<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request){
        if(!$this->validateUserEmail($request->email)){
            return $this->failedResponse();
        }

        $this->sendEmails($request->email);
        return $this->successResponse();
    }

    public function sendEmails($email){
        $token = $this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token));
    }

    public function createToken($email){
        $oldToken = DB::table('password_resets')->where('email',$email)->first();
        if($oldToken){
            return $oldToken;
        }
        $token = str_random(60);
        $this->saveToken($token,$email);
        return $token;
    }

    public function saveToken($token,$email){
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
    }

    public function validateUserEmail($email)
    {
        return !!User::where('email', $email)->first();
    }

    public function failedResponse(){
        return response()->json([
            'error' => 'Email doesn\'t exist in our database.'
        ]);
    }

    public function successResponse(){
        return response()->json([
            'data' => 'Please check your Inbox for resetting your password.'
        ]);
    }
}
