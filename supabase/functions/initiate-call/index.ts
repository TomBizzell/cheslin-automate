import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { phone_number } = await req.json()
    
    if (!phone_number) {
      return new Response(
        JSON.stringify({ error: 'Phone number is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    const response = await fetch('https://us.api.bland.ai/v1/calls', {
      method: 'POST',
      headers: {
        'Authorization': Deno.env.get('BLAND_AI_API_KEY') ?? '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone_number,
        voice: "maya",
        wait_for_greeting: true,
        task: "You are Cheslin, a real estate agent AI who can call buyers, tell them about relevant new properties on the market and field inbound calls. You can even book viewings and query a real estate agency's viewing schedule in real time. You help agencies engage more buyers and miss no calls. Introduce yourself and answer any questions. If you don't know the answer (it's not included in this prompt), you should let them know that they should book a demo to get all the details. Your main goal is to explain your capabilities as an AI assistant and convince them to book a demo to experience your full range of services. Emphasize how you can help their business grow and make their operations more efficient. Guide them towards booking a demo to see these capabilities in action."
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to initiate call')
    }

    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in initiate-call function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})