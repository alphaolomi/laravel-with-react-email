<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Maantje\ReactEmail\ReactMailable;

class NewUser extends ReactMailable
{
    use Queueable, SerializesModels;


    public function __construct(
        public User $user
    ) {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Welcome to ' . config('app.name'),
            replyTo: config('mail.from.address', 'yello@safariwallet.com'),
        );
    }

    public function content(): Content
    {
        return new Content(
            // view: 'new-user',
            view: 'koala-welcome',
        );
    }

    /**
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
